#!/usr/bin/env python3

import connexion
import os

from swagger_server import encoder

from flask_cors import CORS


def main():
    app = connexion.App(__name__, specification_dir="./swagger/")
    app.app.json_encoder = encoder.JSONEncoder
    app.add_api("swagger.yaml", arguments={"title": "Corona Extrapolation Data"}, pythonic_params=True)
    CORS(app.app)
    PORT = os.environ.get('PORT')
    app.run(port=PORT)


if __name__ == "__main__":
    main()
