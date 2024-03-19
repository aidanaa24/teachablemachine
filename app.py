from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('website.html')


@app.route('/About')
def classifier():
    return render_template('About.html')


@app.route('/classifier')
def classifier():
    return render_template('classifier.html')


if __name__ == '__main__':
    app.run(debug=True)
