library(shiny)
library(httr)
library(jsonlite)
library(tibble)
library(dplyr)
library(glue)

ui <- fluidPage(
  title = "Predicting Penguin Sex",
  sidebarLayout(
    sidebarPanel(
      selectInput(
        inputId = "species",
        label = "Penguin Species",
        choices = c("Gentoo", "Chinstrap", "Adelie")
      ),
      sliderInput(
        inputId = "bill_length_mm",
        label = "Bill Length (mm)",
        min = 30L,
        max = 60L,
        value = 45L,
        step = 0.5,
        width = "100%"
      ),
      sliderInput(
        inputId = "bill_depth_mm",
        label = "Bill Depth (mm)",
        min = 10L,
        max = 22L,
        value = 15L,
        step = 0.5,
        width = "100%"
      ),
      sliderInput(
        inputId = "flipper_length_mm",
        label = "Flipper Length (mm)",
        min = 170L,
        max = 235L,
        value = 200L,
        step = 1L,
        width = "100%"
      ),
      sliderInput(
        inputId = "body_mass_g",
        label = "Body Mass (g)",
        min = 2700L,
        max = 6300L,
        value = 3500L,
        step = 10L,
        width = "100%"
      ),
      actionButton(
        inputId = "predict_sex",
        label = "Predict",
        width = "100%"
      )
    ),
    mainPanel(
      br(), br(), br(),
      h1(textOutput("predicted_sex"))
    )
  )
)

server <- function(input, output) {
  new_data <- reactive({
    tibble(
      species = input$species,
      bill_length_mm = input$bill_length_mm,
      bill_depth_mm = input$bill_depth_mm,
      flipper_length_mm = input$flipper_length_mm,
      body_mass_g = input$body_mass_g
    )
  })

  prediction <-
    eventReactive(input$predict_sex, {
      url <- "http://penguin.eastus.azurecontainer.io:8000/predict"
      json_data <- toJSON(new_data())
      response <- POST(url, body = json_data)
      content(response) |> unlist()
    })

  output$predicted_sex <-
    eventReactive(input$predict_sex, {
      glue("The {input$species} 🐧 is predicted to be {prediction()}.")
    })
}

shinyApp(ui, server)
