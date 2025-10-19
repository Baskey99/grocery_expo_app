import { StyleSheet, View } from 'react-native'
import LocationSection from './LocationSection'
import SearchBar from './SearchBar'

export default function HeaderSection() {
  return (
    <View >
      <LocationSection />
      <SearchBar />
    </View>
  )
}

const styles = StyleSheet.create({})