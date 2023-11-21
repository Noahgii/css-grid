function Lista({ usuarios }) {
    return (

        <>
            <h1>Lista de usuarios</h1>
            <table class="table table-dark table-striped">
                <thead>
                <tr>
                        <td>Nome</td>
                        <td>Idade</td>
                    </tr>
                </thead>
                <tbody>
                 {
                    usuarios.map((item) => 
                    <tr>
                          <td>{item.nome}</td>
                          <td>{item.Idade}</td>
                    </tr>
                     )
                 }
                </tbody>
            </table>




        </>

    )
}

export default Lista;