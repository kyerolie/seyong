window.addEventListener('load', () => {

    function $(selector) {
        const element = document.querySelector(selector)
        return element
    }

    const button = document.querySelector("#button")
    const header = document.querySelector("h1")
    const ul = document.querySelector("ul")
    header.innerHTML = 'Webinar 2024'
    const removeButtons = document.querySelectorAll('.btn-danger')
    removeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tr = btn.closest('tr')
            // const cells = tr.querySelectorAll('td')
            tr.remove()
        })
    })

    const frm = document.querySelector("#frm")
    frm.addEventListener('submit', (frm) => {
        frm.preventDefault()
        // $("#loader").classList.remove("hide")
        const id = $("[name='id']")
        const fn = $("[name='fn']")
        const ln = $("[name='ln']")
        const handle = $("[name='handle']")

        if (id.value) {
            const trs = $("table thead").querySelectorAll("tr")
            trs.forEach((tr, index) => {
                const cells = tr.querySelectorAll('td')
                if (cells.length > 0 && cells[0].innerHTML === id.value) {
                    cells[1].innerHTML = fn.value
                    cells[2].innerHTML = ln.value
                    cells[3].innerHTML = handle.value
                }
            })
            button.innerHTML = 'Add'
            id.value = ""
            fn.value = ""
            ln.value = ""
            handle.value = ""
            return
        }
        fetch('https://mocki.io/v1/89936f30-5aa3-40a9-b231-7ddd093183ac')
            .then((response) => response.json())
            .then((response) => {
                $("#loader").classList.add("hide")
               
                addRow(fn.value, ln.value, handle.value)
                fn.value = ""
                ln.value = ""
                handle.value = ""
            })
    })

    function addRow(fn, ln, handle) {
        const table = document.querySelector("table")
        const tr = table.querySelectorAll('tr')
        const row = table.insertRow(tr.length)
        const cell1 = row.insertCell(0)
        const cell2 = row.insertCell(1)
        const cell3 = row.insertCell(2)
        const cell4 = row.insertCell(3)
        const cell5 = row.insertCell(4)

        cell1.innerHTML = tr.length
        cell2.innerHTML = fn
        cell3.innerHTML = ln
        cell4.innerHTML = handle

        const newButton = document.createElement("button")
        newButton.innerHTML = "delete"
        newButton.classList.add("btn")
        newButton.classList.add("btn-danger")

        const updateButton = document.createElement("button")
        updateButton.innerHTML = "update"
        updateButton.classList.add("btn")
        updateButton.classList.add("btn-info")

        newButton.addEventListener('click', () => {
            row.remove()
        })
        
        updateButton.addEventListener('click', function() {
            $("[name='id']").value = tr.length
            $("[name='fn']").value = fn
            $("[name='ln']").value = ln
            $("[name='handle']").value = handle
            $("#button").innerHTML = "Update"
        })

        cell5.append(newButton)
        cell5.append(updateButton)
    }
    button.addEventListener('click', () => {

        /*
                const table = document.querySelector("table")
                const tr = table.querySelectorAll('tr')
                const row = table.insertRow(tr.length)
                const cell1 = row.insertCell(0)
                const cell2 = row.insertCell(1)
                const cell3 = row.insertCell(2)
                const cell4 = row.insertCell(3)
                const cell5 = row.insertCell(4)
                cell1.innerHTML = 4
                cell2.innerHTML = "Andy"
                cell3.innerHTML = "Nieves"
                cell4.innerHTML = "@andi"
        
                const newButton = document.createElement("button")
                newButton.innerHTML = "delete"
                newButton.classList.add("btn")
                newButton.classList.add("btn-danger")
                newButton.addEventListener('click', () => {
                    row.remove()
                })
                cell5.append(newButton)
        
                */
    })


})
