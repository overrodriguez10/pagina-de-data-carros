document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById('formCarro')
    const mensaje = document.getElementById('mensaje')

    const API_URL = "https://api-carros-y4vh.onrender.com"

    if (!form) {
        console.error("❌ No se encontró el formulario (id=formCarro)")
        return
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault()

        const carro = {
            tipo: document.getElementById('tipo').value,
            nombre: document.getElementById('nombre').value,
            marca: document.getElementById('marca').value,
            año: Number(document.getElementById('año').value),
            precio: Number(document.getElementById('precio').value),
            color: document.getElementById('color').value,
            potencia: Number(document.getElementById('potencia').value),
            velocidadMax: Number(document.getElementById('velocidadMax').value),
            combustible: document.getElementById('combustible').value,
            imagen: document.getElementById('imagen').value
        }

        console.log("📦 Enviando:", carro)

        try {
            const res = await fetch(`${API_URL}/carros`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(carro)
            })

            const data = await res.json()

            console.log("📥 Respuesta:", data)

            if (!res.ok) {
                throw new Error(data.error || "Error al crear carro")
            }

            mensaje.style.color = "lightgreen"
            mensaje.textContent = "🚗 Carro creado correctamente"
            form.reset()

        } catch (error) {
            console.error("❌ Error:", error)
            mensaje.style.color = "red"
            mensaje.textContent = error.message
        }
    })

})