from shiny import *
import urllib.request
import json

url = "http://penguin.eastus.azurecontainer.io:8000/predict"

app_ui = ui.page_fluid(
    ui.layout_sidebar(
    ui.panel_sidebar(
    ui.input_select("species", "Penguin Species",
                    {"Gentoo":"Gentoo", "Chinstrap":"Chinstrap", "Adelie":"Adelie"}),
    ui.input_slider("bill_length_mm", "Bill Length (mm)",
                    min=30, max=60, value=45, step=0.5, width="100%"),
    ui.input_slider("bill_depth_mm", "Bill Depth (mm)",
                    min=10, max=22, value=15, step=0.5, width="100%"),
    ui.input_slider("flipper_length_mm", "Flipper Length (mm)",
                    min=170, max=235, value=200, step = 1, width="100%"),
    ui.input_slider("body_mass_g","Body Mass (g)",
                    min=2700, max=6300, value=3500, step=10, width="100%"),
    ui.input_action_button("go", "Predict", width="100%")
    ),
    ui.panel_main(ui.h2(ui.output_text("txt")))
    )
)

def server(input, output, session):
    @output
    @render.text
    @reactive.event(input.go)
    def txt():
       payload = [{"species":input.species(),
                   "bill_length_mm":input.bill_length_mm(),
                   "bill_depth_mm":input.bill_depth_mm(),
                   "flipper_length_mm":input.flipper_length_mm(),
                   "body_mass_g":input.body_mass_g()}]
              
       headers = {"Content-Type": "application/json"}
       data = json.dumps(payload).encode("utf-8")
       headers = {k: v.encode("utf-8") for k, v in headers.items()}
       request = urllib.request.Request(url, data, headers)
       response = urllib.request.urlopen(request)
       data = response.read()
       response_data = json.loads(data.decode("utf-8"))
       prediction = response_data[0]
       class_pred = prediction[".pred_class"]
       return f"The {input.species()} 🐧 is predicted to be {class_pred}." 
  
app = App(app_ui, server)
