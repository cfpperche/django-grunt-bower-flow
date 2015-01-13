# encoding: utf-8

from django.conf.urls import patterns, url

from core.views import HomeView

urlpatterns = patterns('',
                       url(r'^$', HomeView.as_view()),
                       )