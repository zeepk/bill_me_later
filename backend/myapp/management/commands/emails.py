from django.core.management.base import BaseCommand, CommandError
# from dashboard import models
import os
from myapp import email_management


class Command(BaseCommand):
    help = 'Updates local DB of environment component hostnames and data centers'

    def handle(self, *args, **options):
        email_management.getComingEvents()