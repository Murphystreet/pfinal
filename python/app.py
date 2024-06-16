from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    role = request.form['role']

    # Aquí puedes agregar la lógica para verificar el usuario y la contraseña.

    if role == 'admin':
        return redirect(url_for('admin'))
    elif role == 'rector':
        return redirect(url_for('rector'))
    elif role == 'docente':
        return redirect(url_for('docente'))
    elif role == 'estudiante':
        return redirect(url_for('estudiante'))
    else:
        return "Rol no válido"

@app.route('/admin')
def admin():
    return render_template('admin.html')

@app.route('/rector')
def rector():
    return render_template('rector.html')

@app.route('/docente')
def docente():
    return render_template('docente.html')

@app.route('/estudiante')
def estudiante():
    return render_template('estudiante.html')

if __name__ == '__main__':
    app.run(debug=True)
