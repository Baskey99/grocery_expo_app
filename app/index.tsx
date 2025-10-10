import { router } from 'expo-router'
import React from 'react'
import { Button, StyleSheet, Text } from 'react-native'
import ScreenWrapper from '../components/ScreenWrapper'

export default function index() {
  return (
    <ScreenWrapper bg='white'>
      <Text>index</Text>
      <Button title="welcome" onPress={() => router.push("/welcome")} />
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({})