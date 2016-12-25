from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class Arkep(FlaskForm):
    emri_nderrmarresit=StringField('emri_nderrmarresit',validators=[DataRequired()])