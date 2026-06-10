import json
import os
import requests

BASE_URL = "https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/{}.png"

# Cargar tu JSON
script_dir = os.path.dirname(os.path.abspath(__file__))
json_path = os.path.join(script_dir, "order.json")

with open(json_path, "r", encoding="utf-8") as f:
    pokemon_list = json.load(f)

# Carpeta donde se ejecuta el script
output_dir = os.getcwd()

for pokemon_id, pokemon_name in pokemon_list:
    url = BASE_URL.format(pokemon_name)
    output_file = os.path.join(output_dir, f"{pokemon_name}.png")

    try:
        response = requests.get(url, timeout=10)

        if response.status_code == 200:
            with open(output_file, "wb") as img:
                img.write(response.content)

            print(f"✓ Descargado: {pokemon_name}")
        else:
            print(f"✗ No encontrado: {pokemon_name}")

    except Exception as e:
        print(f"✗ Error con {pokemon_name}: {e}")