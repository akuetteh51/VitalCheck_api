import os
from notebook.base.handlers import IPythonHandler
from notebook.utils import url_path_join

def load_jupyter_server_extension(nb_app):
    CONTENT_SECURITY_POLICY_HEADER_NAME = 'Content-Security-Policy'
    CONTENT_SECURITY_POLICY_HEADER_VALUE = 'frame-ancestors self http://localhost:8080 https://localhost:8080'
    CONTENT_SECURITY_POLICY_HEADER_VALUE = 'frame-ancestors *'

    web_app = nb_app.web_app
    nb_app.log.info("officepy serverextension updating web_app.settings")
    if 'headers' in web_app.settings and isinstance(web_app.settings['headers'], dict):
        if CONTENT_SECURITY_POLICY_HEADER_NAME not in web_app.settings['headers']:
            web_app.settings["headers"][CONTENT_SECURITY_POLICY_HEADER_NAME] = CONTENT_SECURITY_POLICY_HEADER_VALUE
            nb_app.log.info("officepy serverextension added Content-Security-Policy {}".format(CONTENT_SECURITY_POLICY_HEADER_VALUE))
        else:
            nb_app.log.info("officepy serverextension does not override existing Content-Security-Policy")
    else:
        web_app.settings["headers"] = {CONTENT_SECURITY_POLICY_HEADER_NAME: CONTENT_SECURITY_POLICY_HEADER_VALUE}
        nb_app.log.info("officepy serverextension set headers with Content-Security-Policy {}".format(CONTENT_SECURITY_POLICY_HEADER_VALUE))

    class CallbackHandler(IPythonHandler):
        """
        """

        def get(self, path):
            """
            """
            nb_app.log.info('in CallbackHandler with path={}'.format(path))
            self.write("This is Jupyter Excel")

    host_pattern = '.*$'
    base_url = web_app.settings['base_url']

    web_app.add_handlers(
        host_pattern,
        [
         (url_path_join(base_url, '/excel(.*)'), CallbackHandler),
         ]
    )

    nb_app.log.info("officepy server extension enabled")
