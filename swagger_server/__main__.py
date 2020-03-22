#!/usr/bin/env python3

import connexion

from swagger_server import encoder

try:
    from flask.ext.cors import CORS  # The typical way to import flask-cors
except ImportError:
    # Path hack allows examples to be run without installation.
    import os

    parentdir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    os.sys.path.insert(0, parentdir)

    from flask.ext.cors import CORS


def main():
    app = connexion.App(__name__, specification_dir="./swagger/")
    app.app.json_encoder = encoder.JSONEncoder
    app.add_api("swagger.yaml", arguments={"title": "Corona Extrapolation Data"}, pythonic_params=True)
    CORS(app)
    app.run(port=8080)


if __name__ == "__main__":
    main()
