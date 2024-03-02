import { expect, test } from "bun:test";

import {
  CHAINS,
  CATEGORIES,
  type ChainsResponseType,
  type CategoriesResponseType,
} from "../index";
import { CATEGORIES_ENDPOINT, CHAINS_ENDPOINT } from "../constant";

test("chains should be same as latest", async () => {
  const res = await fetch(CHAINS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      need_all: true,
    }),
  });
  const resJson = (await res.json()) as ChainsResponseType;
  const infoList = resJson.payload.ChainInfoList;
  expect(infoList.length).toBeGreaterThan(0);
  infoList.forEach((chainInfo) => {
    expect(CHAINS[chainInfo.chain_id]).toBe(chainInfo.chain_name);
  });
});

test("category should be same as latest", async () => {
  const res = await fetch(CATEGORIES_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      need_all: true,
    }),
  });
  const resJson = (await res.json()) as CategoriesResponseType;
  const categoryList = resJson.payload.categories;
  expect(categoryList.length).toBeGreaterThan(0);
  categoryList.forEach((category) => {
    expect(CATEGORIES[category.category_id]).toBe(category.category_name);
  });
});
