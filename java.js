window.addEventListener('load', () => {
    lists = JSON.parse(localStorage.getItem('lists')) || [];

    // SUBMIT 
    document.getElementById('regForm').addEventListener('submit', e => {
        e.preventDefault();

        const inscr = {
            nom: e.target.elements.nom.value,
            prenom: e.target.elements.prenom.value,
            sexe: e.target.elements.sexe.value,
            date: e.target.elements.date.value,
            lieu: e.target.elements.lieuNaiss.value,
            classe: e.target.elements.classe.value,

            
            Tnom: e.target.elements.Tnom.value,
            Tprenom: e.target.elements.Tprenom.value,
            TProfession: e.target.elements.TProfession.value,
            Tcontact: e.target.elements.Tcontact.value,
            Temail: e.target.elements.Temail.value,
            done: false,
            createdAt: new Date().getTime()
        }

        lists.push(inscr);

        localStorage.setItem('lists', JSON.stringify(lists));

        // Reset the form
        e.target.reset();

        DisplayLists()
    })

    DisplayLists()
})


function DisplayLists() {
    const inscrList = document.getElementById('inscr-list');
    inscrList.innerHTML = "";

    lists.forEach(inscr => {
        const inscrItem = document.createElement('div');
        inscrItem.classList.add('todo-item');

        const label = document.createElement('label');
        const input = document.createElement('input');
        const span = document.createElement('span');
        const content = document.createElement('div');
        const actions = document.createElement('div');
        const edit = document.createElement('button');
        const deleteButton = document.createElement('button');

        input.type = 'checkbox';
        input.checked = inscr.done;
        span.classList.add('bubble');
        if (inscr.category == 'personal') {
            span.classList.add('personal');
        } else {
            span.classList.add('business');
        }
        content.classList.add('todo-content');
        actions.classList.add('actions');
        edit.classList.add('edit');
        deleteButton.classList.add('delete');

        content.innerHTML = 
        `<input type="text" value="
        ${inscr.nom} 
        ${inscr.prenom} 
        ${inscr.sexe} 
        ${inscr.date}
        ${inscr.lieu}
        ${inscr.classe} 

        ${inscr.Tnom} 
        ${inscr.Tprenom} 
        ${inscr.TProfession} 
        ${inscr.Tcontact} 
        ${inscr.Temail} 
        " readonly>`;
        
        deleteButton.innerHTML = 'Delete';

        label.appendChild(input);
        label.appendChild(span);
        actions.appendChild(edit);
        actions.appendChild(deleteButton);
        inscrItem.appendChild(label);
        inscrItem.appendChild(content);
        inscrItem.appendChild(actions);

        inscrList.appendChild(inscrItem);

        if (inscr.done) {
            inscrItem.classList.add('done');
        }

        input.addEventListener('change', (e) => {
            inscr.done = e.target.checked;
            localStorage.setItem('lists', JSON.stringify(lists));

            if (inscr.done) {
                inscrItem.classList.add('done');
            } else {
                inscrItem.classList.remove('done');
            }

            DisplayLists()

        })

        edit.addEventListener('click', (e) => {
            const input = content.querySelector('input');
            input.removeAttribute('readonly');
            input.focus();
            input.addEventListener('blur', (e) => {
                input.setAttribute('readonly', true);
                inscr.content = e.target.value;
                localStorage.setItem('lists', JSON.stringify(lists));
                DisplayLists()

            })
        })

        deleteButton.addEventListener('click', (e) => {
            lists = lists.filter(t => t != inscr);
            localStorage.setItem('lists', JSON.stringify(lists));
            DisplayLists()
        })

    })
}
