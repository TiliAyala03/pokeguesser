import json
import os

SOURCE_POKEMON = "pokemon_json"
SOURCE_SPECIES = "pokemon-species_json"

OUTPUT = "pokemon_compact"
print(os.listdir("."))

os.makedirs(OUTPUT, exist_ok=True)

for index in range(1, 1026):

    pokemon_path = os.path.join(
        SOURCE_POKEMON,
        f"pokemon_{index}.json"
    )

    species_path = os.path.join(
        SOURCE_SPECIES,
        f"pokemon_{index}.json"
    )

    if not os.path.exists(pokemon_path):
        continue

    if not os.path.exists(species_path):
        continue

    with open(pokemon_path, encoding="utf-8") as f:
        pokemonJSON = json.load(f)

    with open(species_path, encoding="utf-8") as f:
        pokemonSpeciesJSON = json.load(f)

    # ------------------------
    # NAME
    # ------------------------

    name = pokemonSpeciesJSON["name"]

    # ------------------------
    # TYPE 1
    # ------------------------

    type1 = pokemonJSON["types"][0]["type"]["name"]

    # ------------------------
    # ABILITY
    # ------------------------

    ability = pokemonJSON["abilities"][0]["ability"]["name"]

    # ------------------------
    # GENERATION
    # ------------------------

    gen = pokemonSpeciesJSON["generation"]["name"]

    # ------------------------
    # GENUS (ENGLISH)
    # ------------------------

    genus = ""

    for entry in pokemonSpeciesJSON["genera"]:
        if entry["language"]["name"] == "en":
            genus = entry["genus"]
            break

    # ------------------------
    # BEST STAT
    # ------------------------

    stats = {
        "hp": pokemonJSON["stats"][0]["base_stat"],
        "attack": pokemonJSON["stats"][1]["base_stat"],
        "defense": pokemonJSON["stats"][2]["base_stat"],
        "specialAttack": pokemonJSON["stats"][3]["base_stat"],
        "specialDefense": pokemonJSON["stats"][4]["base_stat"],
        "speed": pokemonJSON["stats"][5]["base_stat"],
    }

    bestStat = max(stats, key=stats.get)

    # ------------------------
    # EVOLUTION STAGE
    # ------------------------

    if pokemonSpeciesJSON["evolves_from_species"] is None:
        evStage = "firstStage"
    else:
        evStage = "nonFirstStage"

    # ------------------------
    # SECOND TYPE
    # ------------------------

    if len(pokemonJSON["types"]) == 1:
        type2 = "none"
    else:
        type2 = pokemonJSON["types"][1]["type"]["name"]

    compact = {
        "name": name,
        "type1": type1,
        "ability": ability,
        "gen": gen,
        "genus": genus,
        "bestStat": bestStat,
        "evStage": evStage,
        "type2": type2
    }

    output_path = os.path.join(
        OUTPUT,
        f"pokemon_{index}.json"
    )

    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(compact, f, separators=(",", ":"))

print("Done!")