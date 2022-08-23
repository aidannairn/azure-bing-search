const replacePunctuation = (testStr: string): string => {
  const punctuationRegex = /[!!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g
  const multipleSpaceRegex = /  +/g

  // Replace punctuation with a space
  const filteredPunctuationResult = testStr.replace(punctuationRegex, ' ')

  // Replace consecutive spaces with a single space
  const filteredSpacesResult = filteredPunctuationResult.replace(multipleSpaceRegex, ' ')

  // Remove leading and trailing spaces
  const trimmedResult = filteredSpacesResult.trim()

  return trimmedResult
}

export default replacePunctuation