import { expect, test } from "@playwright/test";
import { writeFileSync } from "node:fs";
import { makeBulbasaur, makeIvysaur, makeVenusaur } from "./pokemon-fixtures";

function resetDatabase() {
  const jsonFileName = `./app/pokemon/pokemons.json`;

  const allPokemon = [makeBulbasaur(), makeIvysaur(), makeVenusaur()];

  writeFileSync(jsonFileName, JSON.stringify(allPokemon));
}

test("Going to pokemon detail", async ({ page }) => {
  resetDatabase();

  await page.goto("/");

  await page.getByRole("link", { name: "Bulbasaur" }).click();

  await expect(page).toHaveURL("/pokemon/1");

  await expect(page.getByRole("heading", { name: "Bulbasaur" })).toBeVisible();
});

test("Delete pokemon", async ({ page }) => {
  resetDatabase();

  await page.goto("/");

  await page.getByRole("link", { name: "Bulbasaur" }).click();

  await expect(page).toHaveURL("/pokemon/1");

  await expect(page.getByRole("heading", { name: "Bulbasaur" })).toBeVisible();

  await page.getByText("Delete").click();
});
