// Get a reference to the database service
var database = firebase.database();
var userRef = firebase.database().ref('users/');
userRef.on
(
    'value', function (snapshot) 
    {
        console.log (snapshot.val ());
        dbContent = snapshot.val ();
        eliminar ();
        /*editar ();*/
    }
);

function iniciar ()
{
    document.getElementById ('add-product').addEventListener ("click", guardar, false);
    $("#mostrar").click
    (
        function () 
        {
            $(".table").show(2000);
            leer ();
        }
    );
}

function guardar(key) 
{
    let name = $("#nombre").val();
    let email = $("#email").val();
    let url = $("#url").val();
    let productObject = 
    {
        name, email, url
    };
    console.log(productObject);
    userRef.push(productObject);
};

const leer = () =>
{
    console.log (dbContent);
    $("#tabla").empty();
    $.each
    (
        dbContent, (key, value) =>
        {
            console.log(`key ${key}, value ${value}`);
            $("#tabla").append
            (` 
                <tr>
                    <th>${key}</th>
                    <td>${value.name}</td>
                    <td>${value.email}</td>
                    <td>${value.url}</td>
                    <td><button class="btn btn-danger" onclick="eliminar('${key}')">Eliminar</button></td>
                    <td><button class="btn btn-warning" onclick="editar('${key}', '${value.name}', '${value.email}', '${value.url}')">Editar</button></td>
                </tr>
            `)      
        }
    );
}

function eliminar (key)
{
    firebase.database().ref('users/' + key).remove
    (    
        function (error) 
        {
            if (error) 
            {
                // The write failed...
            } 
            else 
            {
                // Data saved successfully!
                leer ();
            }
        }
    );
}

function editar(key, name, email, url)
{
    $("#chan").append
    (`
        <h4>${key}</h4>
    `);
    $("#nom").val(name);
    $("#em").val(email);
    $("#ur").val(url);
    $("#edit").click
    (
        function () 
        {
            var name = $("#nom").val();
            var email = $("#em").val();
            var url = $("#ur").val();
            firebase.database().ref('users/' + key).set
            (
                {
                    name: name,
                    email: email,
                    url: url
                },
                function (error) 
                {
                    if (error) 
                    {
                        // The write failed...
                    }
                    else 
                    {
                        // Data saved successfully!
                    }
                }
            );
        }
    );
}

window.addEventListener(`load`, iniciar, false);