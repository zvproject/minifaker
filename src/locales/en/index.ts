import minifaker from '../../index'

import firstNames from './name/firstNames'
import maleFirstNames from './name/maleFirstNames'
import femaleFirstNames from './name/femaleFirstNames'
import phoneFormats from './phone/formats'
import cityNames from './address/cityNames'
import cityPrefixes from './address/cityPrefixes'
import citySuffixes from './address/citySuffixes'
import lastNames from './name/lastNames'
import titles from './name/titles'

import adjectives from './word/adjectives'
import adverbs from './word/adverbs'
import conjunctions from './word/conjunctions'
import interjections from './word/interjections'
import nouns from './word/nouns'
import prepositions from './word/prepositions'
import verbs from './word/verbs'
import domainSuffixes from './internet/domainSuffixes'
import freeEmails from './internet/freeEmails'

const locale = {
  maleFirstNames,
  femaleFirstNames,
  firstNames,
  phoneFormats,
  cityNames,
  cityPrefixes,
  citySuffixes,
  lastNames,
  ...titles,
  adjectives,
  adverbs,
  conjunctions,
  interjections,
  nouns,
  prepositions,
  verbs,
  domainSuffixes,
  freeEmails
}

minifaker.addLocale('en', locale)

export default locale