<?php
// Datos de conexión a la base de datos
$servidor = "localhost";
$usuario = "root"; // Cambia si tienes otro usuario
$contrasena = "";  // Cambia si tienes una contraseña configurada
$base_datos = "programación";

// Crear conexión
$conn = new mysqli($servidor, $usuario, $contrasena, $base_datos);

// Verificar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Verificar si se enviaron los datos del formulario
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre_usuario = $_POST["nombre_usuario"];
    $correo = $_POST["correo"];
    $contrasena = $_POST["contrasena"];
    $rol = $_POST["rol"];

    // Preparar y ejecutar consulta para buscar al usuario
    $sql = "SELECT * FROM inicio_de_sesion WHERE nombre_usuario = ? AND correo = ? AND rol = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $nombre_usuario, $correo, $rol);
    $stmt->execute();
    $resultado = $stmt->get_result();

    if ($resultado->num_rows > 0) {
        $usuario = $resultado->fetch_assoc();

        // Verificar la contraseña
        if (password_verify($contrasena, $usuario['contrasena'])) {
            echo "Inicio de sesión exitoso. Bienvenido, " . $usuario['nombre_usuario'];
            // Redirigir a una página principal
            header("Location: pagina_principal.html");
            exit();
        } else {
            echo "Contraseña incorrecta.";
        }
    } else {
        echo "Usuario no encontrado o datos incorrectos.";
    }

    $stmt->close();
}

$conn->close();
?>
