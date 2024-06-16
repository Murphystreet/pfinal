import json

# Cargar usuarios desde el archivo JSON
def cargar_usuarios(archivo):
    with open(archivo, 'r') as f:
        datos = json.load(f)
    return datos['usuarios']

# Verificar credenciales de usuario
def verificar_credenciales(username, password, usuarios):
    for usuario in usuarios:
        if usuario['username'] == username and usuario['password'] == password:
            return usuario['role']
    return None

# Función principal de login
def login():
    archivo_usuarios = 'usuarios.json'
    usuarios = cargar_usuarios(archivo_usuarios)
    
    username = input("Nombre de usuario: ")
    password = input("Contraseña: ")
    
    role = verificar_credenciales(username, password, usuarios)
    
    if role:
        print(f"Login exitoso. Rol: {role}")
        # Aquí puedes agregar lógica adicional dependiendo del rol
        if role == "Administrador":
            print("Bienvenido, Administrador. Tienes acceso completo.")
        elif role == "Rector":
            print("Bienvenido, Rector. Tienes acceso a la gestión académica.")
        elif role == "Docente":
            print("Bienvenido, Docente. Tienes acceso a tus cursos y estudiantes.")
        elif role == "Estudiante":
            print("Bienvenido, Estudiante. Tienes acceso a tus clases y notas.")
    else:
        print("Nombre de usuario o contraseña incorrectos.")

if __name__ == "__main__":
    login()
