$(document).ready(function(){

    $( "#form" ).validate({
          rules: {
            qellimi_sherbimit:{
                required:true,

            },
            emri_nderrmarresit: {
              required: true,
              alphanumeric:true,
            },
            nr_regjistrimit_biznesit: {
              required: true,
            },
            nr_fiskal: {
              required: true,
            },
            adresa_nderrmarresit: {
              required: true,
            },
            telefoni_nderrmarresit: {
              required: true,
            },
            faksi_nderrmarresit: {
              required: true,
            },
            nderrmarresit_email: {
              required: true,
            },
            emri_zyrtarit: {
              required: true,
            },
            adresa_zyrtarit: {
              required: true,
            },
            telefoni_zyrtarit: {
              required: true,
            },
            faksi_zyrtarit: {
              required: true,
            },
            email_zyrtarit: {
              required: true,
            },
            id_zyrtarit: {
              required: true,
            },
            
            pershkrimi1:{
                required:true,
            },
            pershkrimi2:{
                required:true,
            },
            pershkrimi3:{
                required:true,
            },
            pershkrimi4:{
                required:true,
            },
            pershkrimi5:{
                required:true,
            },

          },
          messages: {
            qellimi_sherbimit:{
            required: "Ju lutem plotesoni fushen",

            },
            emri_nderrmarresit: {
              required: "Ju lutem plotesoni fushen",
              alphanumeric:"Vetem alfanumeric",
            },
            nr_regjistrimit_biznesit: {
              required: "Ju lutem plotesoni fushen",
            },
            nr_fiskal: {
              required: "Ju lutem plotesoni fushen",
            },
            adresa_nderrmarresit: {
              required: "Ju lutem plotesoni fushen",
            },
            telefoni_nderrmarresit: {
              required: "Ju lutem plotesoni fushen",
            },
            faksi_nderrmarresit: {
              required: "Ju lutem plotesoni fushen",
            },
            nderrmarresit_email: {
              required: "Ju lutem plotesoni fushen",
            },
            emri_zyrtarit: {
              required: "Ju lutem plotesoni fushen",
            },
            adresa_zyrtarit: {
              required: "Ju lutem plotesoni fushen",
            },
            telefoni_zyrtarit: {
              required: "Ju lutem plotesoni fushen",
            },
            faksi_zyrtarit: {
              required: "Ju lutem plotesoni fushen",
            },
            email_zyrtarit: {
              required: "Ju lutem plotesoni fushen",
            },
            id_zyrtarit: {
              required: "Ju lutem plotesoni fushen",
            },
            pershkrimi1:{
                required:"Ju lutem plotesoni fushen",
            },
            pershkrimi2:{
                required:"Ju lutem plotesoni fushen",
            },
            pershkrimi3:{
                required:"Ju lutem plotesoni fushen",
            },
            pershkrimi4:{
                required:"Ju lutem plotesoni fushen",
            },
            pershkrimi5:{
                required:"Ju lutem plotesoni fushen",
            },

          }
        });


});