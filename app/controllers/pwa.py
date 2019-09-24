from flask import (Blueprint, make_response, send_from_directory)

home = Blueprint('pwa', __name__, url_prefix='')


@home.route('/manifest.json')
def manifest():
    return send_from_directory('static', 'manifest.json')


@home.route('/sw.js')
def service_worker():
    response = make_response(send_from_directory('static', 'sw.js'))
    response.headers['Cache-Control'] = 'no-cache'
    return response
