import getCountryAPIData from './API/countryAPI_Request';

class Country {
  constructor(country) {
    this.countryName = country;
    this.listItems = Array.from(document.querySelectorAll('.homeland__item-value'));
    this.countryFlagImage = document.querySelector('.homeland__image');
    this.storeData = [];
    this.flagImageLink = [];
  }

  //  Store data from API request
  storeAPIData() {
    getCountryAPIData(this.countryName).then((data) => {
      const countryData_Object = data.data[0];

      // Store region
      countryData_Object.region ? this.storeData.push(countryData_Object.region) : this.noAvailableData();

      // Store capital
      countryData_Object.capital ? this.storeData.push(countryData_Object.capital[0]) : this.noAvailableData();

      // Store all languages
      const languages = Object.values(countryData_Object.languages);
      languages ? this.storeData.push(languages.join(', ')) : this.noAvailableData();

      // Store currencies names and symbol
      const allCurrencies = Object.values(countryData_Object.currencies);
      const currenciesDetails = allCurrencies.map((currency) => {
        return `name: ${currency.name}, symbol: ${currency.symbol}`;
      });
      currenciesDetails ? this.storeData.push(currenciesDetails.join(', ')) : this.noAvailableData();

      // Store people population
      countryData_Object.population ? this.storeData.push(`${countryData_Object.population} people`) : this.noAvailableData();

      // Store all timezones
      const timeZones = Object.values(countryData_Object.timezones);
      timeZones ? this.storeData.push(timeZones.join(', ')) : this.noAvailableData();

      // Store flag image link
      countryData_Object.flags.svg
        ? this.flagImageLink.push(countryData_Object.flags.svg)
        : this.flagImageLink.push('../dist/assets/White-flag__no-available-info.png');

      this.renderCountryData();
    });
  }

  renderCountryData() {
    if (this.storeData.length === 6 && this.flagImageLink[0]) {
      for (let i = 0; i < this.listItems.length; i++) {
        this.listItems[i].innerHTML = `<span class='homeland__item-value'> ${this.storeData[i]}</span>`;
      }
      this.countryFlagImage.src = this.flagImageLink[0];
    }
  }

  noAvailableData() {
    this.storeData.push('No available information');
  }
}

const country_Moldova = new Country('moldova');

function render_CountrySectionData() {
  country_Moldova.storeAPIData();
}

export default render_CountrySectionData;
