const checkboxes = document.querySelectorAll('input[type=checkbox]');
        let firstChecked = false;
        let lastChecked = false;
        const handleClicks = function handleClickEvents(e, index) {
            if (e.target.checked) {
                if ((e.shiftKey) && !isNaN(firstChecked)) {
                    lastChecked = index;
                    addChecks();
                }
                else {
                    firstChecked = index;
                }
            }
        };
        const addChecks = function addChecksBetweenItems() {
            let firstIndex = Math.min(firstChecked, lastChecked);
            let lastIndex = Math.max(firstChecked, lastChecked);
            for (let i = firstIndex; i < lastIndex; i += 1) {
                checkboxes[i].checked = true;
            };
        };
        checkboxes.forEach((checkbox, index) => {
            checkbox.addEventListener('click', (e) => {
                handleClicks(e, index);
            });
        });