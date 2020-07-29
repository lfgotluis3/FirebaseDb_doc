// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyApsPXQMAIdsZW05zrok2koyNU2oKg8Nqg",
    authDomain: "paginadeejemplo-bf578.firebaseapp.com",
    databaseURL: "https://paginadeejemplo-bf578.firebaseio.com",
    projectId: "paginadeejemplo-bf578",
    storageBucket: "paginadeejemplo-bf578.appspot.com",
    messagingSenderId: "627256903149",
    appId: "1:627256903149:web:7c911e32832b12d265d3e4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
function iniciar ()
{
    $("#add-img").on
    (
        "click", () => 
        {
            downloadImg();
        }
    );
};

downloadImg = function()
{
    var file =($(`.img`))[0].files[0];
    console.log(file);
    var storageRef = storage.ref(`/portfolio/` + file.name);
    var uploadTask = storageRef.put(file);
    uploadTask.on
    (`state_changed`, function(snapshot)
    {

    },
    function(error)
    {
        alert (error);
    },
    function()
    {
        alert ("Imagen subida a firebase");
    });
};
/*function downloadImg ()
{
    let file = $(".img").val ();
    let imgObject = {file};
    console.log(imgObject);
};*/
window.addEventListener(`load`, iniciar, false);