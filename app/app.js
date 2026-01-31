const state = {
  filter: "all",
  search: "",
  checklist: {}
};

const STORAGE_KEY = "wstg-checklist-state";

const elements = {
  search: document.querySelector("#search"),
  filter: document.querySelector("#status-filter"),
  summary: document.querySelector("#summary"),
  checklist: document.querySelector("#checklist"),
  reset: document.querySelector("#reset")
};

const loadState = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return;
  }

  try {
    const parsed = JSON.parse(stored);
    if (parsed && typeof parsed === "object") {
      state.filter = parsed.filter || state.filter;
      state.search = parsed.search || state.search;
      state.checklist = parsed.checklist || {};
    }
  } catch (error) {
    console.warn("Unable to load saved checklist state.", error);
  }
};

const saveState = () => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      filter: state.filter,
      search: state.search,
      checklist: state.checklist
    })
  );
};

const getStatusCount = () => {
  const counts = STATUS_OPTIONS.reduce((acc, option) => {
    acc[option.value] = 0;
    return acc;
  }, {});
  counts.total = 0;

  WSTG_DATA.forEach((section) => {
    section.tests.forEach((test) => {
      counts.total += 1;
      const status = state.checklist[test.id] || "not-started";
      counts[status] += 1;
    });
  });

  return counts;
};

const formatStatus = (statusValue) =>
  STATUS_OPTIONS.find((option) => option.value === statusValue)?.label || "Not started";

const createStatusBadge = (statusValue) => {
  const badge = document.createElement("span");
  badge.className = `status-badge status-${statusValue}`;
  badge.textContent = formatStatus(statusValue);
  return badge;
};

const shouldShowTest = (test, status) => {
  const matchesSearch = state.search
    ? `${test.id} ${test.title}`.toLowerCase().includes(state.search)
    : true;
  const matchesFilter = state.filter === "all" ? true : status === state.filter;
  return matchesSearch && matchesFilter;
};

const renderChecklist = () => {
  elements.checklist.innerHTML = "";

  WSTG_DATA.forEach((section) => {
    const sectionNode = document.createElement("section");
    sectionNode.className = "section-card";

    const header = document.createElement("div");
    header.className = "section-header";
    header.innerHTML = `
      <div>
        <h2>${section.section}</h2>
        <p>${section.overview}</p>
      </div>
    `;
    sectionNode.appendChild(header);

    const list = document.createElement("div");
    list.className = "test-list";

    section.tests.forEach((test) => {
      const currentStatus = state.checklist[test.id] || "not-started";
      if (!shouldShowTest(test, currentStatus)) {
        return;
      }

      const row = document.createElement("div");
      row.className = "test-row";

      const details = document.createElement("div");
      details.className = "test-details";
      details.innerHTML = `
        <div class="test-id">${test.id}</div>
        <div class="test-title">${test.title}</div>
      `;

      const controls = document.createElement("div");
      controls.className = "test-controls";

      const select = document.createElement("select");
      select.setAttribute("aria-label", `Status for ${test.id}`);
      STATUS_OPTIONS.forEach((option) => {
        const optionNode = document.createElement("option");
        optionNode.value = option.value;
        optionNode.textContent = option.label;
        if (option.value === currentStatus) {
          optionNode.selected = true;
        }
        select.appendChild(optionNode);
      });
      select.addEventListener("change", (event) => {
        state.checklist[test.id] = event.target.value;
        saveState();
        renderChecklist();
        renderSummary();
      });

      const badge = createStatusBadge(currentStatus);

      controls.appendChild(select);
      controls.appendChild(badge);

      row.appendChild(details);
      row.appendChild(controls);
      list.appendChild(row);
    });

    sectionNode.appendChild(list);
    elements.checklist.appendChild(sectionNode);
  });
};

const renderSummary = () => {
  const counts = getStatusCount();
  elements.summary.innerHTML = `
    <div class="summary-card">
      <h3>Checklist coverage</h3>
      <p>${counts.total} tests in scope</p>
    </div>
    <div class="summary-grid">
      ${STATUS_OPTIONS.map(
        (option) => `
        <div class="summary-item">
          <span class="summary-label">${option.label}</span>
          <span class="summary-value">${counts[option.value]}</span>
        </div>`
      ).join("")}
    </div>
  `;
};

const bindEvents = () => {
  elements.search.value = state.search;
  elements.filter.value = state.filter;

  elements.search.addEventListener("input", (event) => {
    state.search = event.target.value.trim().toLowerCase();
    saveState();
    renderChecklist();
  });

  elements.filter.addEventListener("change", (event) => {
    state.filter = event.target.value;
    saveState();
    renderChecklist();
  });

  elements.reset.addEventListener("click", () => {
    state.filter = "all";
    state.search = "";
    state.checklist = {};
    saveState();
    bindEvents();
    renderChecklist();
    renderSummary();
  });
};

loadState();
renderSummary();
bindEvents();
renderChecklist();
