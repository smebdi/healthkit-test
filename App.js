/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import AppleHealthKit from 'rn-apple-healthkit';

const PERMS = AppleHealthKit.Constants.Permissions;
const healthKitOptions = {
  permissions: {
    read: [
      PERMS.StepCount,
      PERMS.DistanceWalkingRunning,
      PERMS.FlightsClimbed,
      PERMS.HeartRate,
      PERMS.ActiveEnergyBurned,
      PERMS.BloodGlucose,
      PERMS.BloodPressureDiastolic,
      PERMS.BloodPressureSystolic,
      PERMS.BodyMassIndex,
      PERMS.BodyFatPercentage,
      PERMS.BodyTemperature,
      PERMS.LeanBodyMass,
      PERMS.MindfulSession,
      PERMS.RespiratoryRate,
      PERMS.SleepAnalysis,
      PERMS.Height,
      PERMS.Weight,
      PERMS.DateOfBirth
    ]
  }
}

export default class App extends Component {

  _handleHealthkitError(property, err) {
    console.log('Error ', property, ': ', err);
    return;
  }

  componentDidMount() {

    let date = new Date();
    date = date.getDate() - 7;
    let options = {
      startDate: (new Date(2020,1,1)).toISOString()
    }
  
    AppleHealthKit.initHealthKit(healthKitOptions, (err, result) => {
      if (err) this._handleHealthkitError('initializing healthkit', err);
      else {

        AppleHealthKit.getDailyStepCountSamples(options, (err, result) => {
          if (err) this._handleHealthkitError('getting step count', err);
          else console.log('step count: ', result);
        });

        AppleHealthKit.getDailyDistanceWalkingRunningSamples(options, (err, result) => {
          if (err) this._handleHealthkitError('getting distance walking running', err);
          else console.log('distance walking running: ', result);
        });

        AppleHealthKit.getDailyFlightsClimbedSamples(options, (err, result) => {
          if (err) this._handleHealthkitError('getting flights climbed', err);
          else console.log('flights climbed: ', result);
        });

        AppleHealthKit.getHeartRateSamples(options, (err, result) => {
          if (err) this._handleHealthkitError('getting heart rate', err);
          else console.log('heart rate: ', result);
        });

        AppleHealthKit.getActiveEnergyBurned(options, (err, result) => {
          if (err) this._handleHealthkitError('getting active energy burned', err);
          else console.log('active energy burned', result);
        });
        
        AppleHealthKit.getBloodGlucoseSamples(options, (err, result) => {
          if (err) this._handleHealthkitError('getting blood glucose', err);
          else console.log('blood glucose: ', result);
        });
        
        AppleHealthKit.getBloodPressureSamples(options, (err, result) => {
          if (err) this._handleHealthkitError('getting blood pressure', err);
          else console.log('blood pressure: ', result);
        });
        
        AppleHealthKit.getLatestBmi(options, (err, result) => {
          if (err) this._handleHealthkitError('getting bmi', err);
          else console.log('bmi: ', result);
        });
        
        AppleHealthKit.getBodyFatPercentageSamples(options, (err, result) => {
          if (err) this._handleHealthkitError('getting body fat percentage', err);
          else console.log('body fat: ', result);
        });
        
        AppleHealthKit.getBodyTemperatureSamples(options, (err, result) => {
          if (err) this._handleHealthkitError('getting body temperature', err);
          else console.log('body temp: ', result);
        });
        
        AppleHealthKit.getLeanBodyMassSamples(options, (err, result) => {
          if (err) this._handleHealthkitError('getting lean body mass', err);
          else console.log('lean body mass: ', result);
        });
        
        AppleHealthKit.getMindfulSession(options, (err, result) => {
          if (err) this._handleHealthkitError('getting mindfulness data', err);
          else console.log('mindfulness: ', result);
        });
        
        AppleHealthKit.getRespiratoryRateSamples(options, (err, result) => {
          if (err) this._handleHealthkitError('getting respiratory rate', err);
          else console.log('repiratory rate: ', result);
        });

        AppleHealthKit.getSleepSamples(options, (err, result) => {
          if (err) this._handleHealthkitError('getting sleep data', err);
          else console.log('sleep data: ', result);
        });

        AppleHealthKit.getLatestHeight(options, (err, result) => {
          if (err) this._handleHealthkitError('getting height', err);
          else console.log('height: ', result);
        });

        AppleHealthKit.getWeightSamples(options, (err, result) => {
          if (err) this._handleHealthkitError('getting weight', err);
          else console.log('weight: ', result);
        });

        AppleHealthKit.getDateOfBirth(options, (err, result) => {
          if (err) this._handleHealthkitError('getting date of birth', err);
          else console.log('date of birth:', result);
        });
      }
    })
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Step One</Text>
                <Text style={styles.sectionDescription}>
                  Edit <Text style={styles.highlight}>App.js</Text> to change this
                  screen and then come back to see your edits.
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>See Your Changes</Text>
                <Text style={styles.sectionDescription}>
                  <ReloadInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Debug</Text>
                <Text style={styles.sectionDescription}>
                  <DebugInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Learn More</Text>
                <Text style={styles.sectionDescription}>
                  Read the docs to discover what to do next:
                </Text>
              </View>
              <LearnMoreLinks />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});