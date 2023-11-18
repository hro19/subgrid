import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test("has title_screen", async ({ page }, test) => {
  await page.goto("https://www.irasutoya.com/");
  await page.screenshot({ path: "screenshot.png" });
});

test("いらすとやで「犬」を検索し、結果をスクリーンショットで保存する", async ({
  page,
}) => {
  // 1. いらすとやのサイトにアクセス
  await page.goto("https://www.irasutoya.com/search");

  // 2. 検索ボックスに「犬」と入力し、検索を実行
  await page.fill('input[name="q"]', "犬"); // 検索ボックスのセレクターはページによって異なる可能性があるため、適宜調整が必要です。
  await page.click("id=searchBtn"); // 検索ボタンのセレクターも同様に、ページによって異なる可能性があるため、適宜調整が必要です。

  // 3. 検索結果がDOMにレンダリングされるのを待つ
  // 例えば、検索結果が表示される要素がロードされるのを待つなど、具体的な待機条件を設定します。
  // このセレクターは例示です。実際のページのDOM構造に合わせて調整してください。
  await page.waitForSelector("#content");

  // 4. 検索結果のスクリーンショットを保存
  await page.screenshot({ path: "search-results.png" });
});