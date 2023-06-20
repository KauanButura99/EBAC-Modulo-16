describe('Acesse o Forms', () => {
  it('Deve fazer modificações no Forms ', async () => {
    await $('~Forms').click()
    await $('~text-input').setValue('olá mundo')
    await $('~Dropdown').click()
    const selector = 'new UiSelector().text("Appium is awesome").className("android.widget.CheckedTextView")'
    const button = await $(`android=${selector}`)
    await button.click()
    await $('~button-Active')

    expect(await $('~text-input')).toBeDisplayed()
  });
});