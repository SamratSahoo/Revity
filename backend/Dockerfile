# Use Python37
FROM python:3.7
# Copy requirements.txt to the docker image and install packages
COPY requirements.txt /
RUN pip install -r requirements.txt --use-deprecated=legacy-resolver
RUN pip install -U click
RUN pip install -U spacy
RUN python -m spacy download en_core_web_lg
# Set the WORKDIR to be the folder
COPY . /app
# Expose port 5000
EXPOSE 5000
ENV PORT 5000
WORKDIR /app
# Use gunicorn as the entrypoint
CMD exec gunicorn --bind :$PORT app:app --workers 2 --threads 2 --timeout 60