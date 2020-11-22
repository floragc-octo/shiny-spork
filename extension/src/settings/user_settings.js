const draftDOM = document.getElementById('draft');
const approvedDOM = document.getElementById('approved');
const obsoleteDOM = document.getElementById('obsolete');
const requestChangesDOM = document.getElementById('request-changes');
const obsolescenceDOM = document.getElementById('obsolescense');

const defaultCommonSettings = {
    draft_color: DEFAULT_DRAFT_COLOR,
    approved_color: DEFAULT_APPROVED_COLOR,
    obsolete_color: DEFAULT_OBSOLETE_COLOR,
    request_changes_color: DEFAULT_REQUEST_CHANGES_COLOR,
    pr_obsolescence_in_day: DEFAULT_OBSOLESCENCE_IN_DAY,
}

const displayCommonSettings = ({ draft_color, approved_color, obsolete_color, request_changes_color, pr_obsolescence_in_day }) => {
    draftDOM.value = draft_color;
    approvedDOM.value = approved_color;
    obsoleteDOM.value = obsolete_color;
    requestChangesDOM.value = request_changes_color;
    obsolescenceDOM.value = pr_obsolescence_in_day;
}

const getCommonSettings = () => ({
    draft_color: draftDOM.value,
    approved_color: approvedDOM.value,
    obsolete_color: obsoleteDOM.value,
    request_changes_color: requestChangesDOM.value,
    pr_obsolescence_in_day: obsolescenceDOM.value,
})

const saveSettings = () => store.set({...getCommonSettings()});

const retrieveSettings = () => store.get(defaultCommonSettings, displayCommonSettings);

const resetDefaultCommonSettings = () => displayCommonSettings(defaultCommonSettings)

document.addEventListener('DOMContentLoaded', retrieveSettings);
document.getElementById('customization-form').addEventListener('submit', saveSettings)
document.getElementById('form-reset').addEventListener('click', resetDefaultCommonSettings)