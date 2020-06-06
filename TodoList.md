# TODO LIST as of 6/2/2020
---------------------------------------------------------------------
### Front-end (FE)
---------------------------------------------------------------------
- [ ] Determine parameters necessary to pass into the Humidity and Soil Temp Graph React components (HG - every second; STG - every minute (for now))
- [x] Add HTTP request functionality to features to talk to BE (Axios)
- [x] Build a function to generate sample random data to preview in graphs
- [x] Make main app responsive
- [x] Implement graph previews to show live data
- [ ] Add correct URL's to HTTPRequests once backend server properly set up
- [ ] Add button to launch Edit data sample rates for each graph (new page)
- [ ] Tabbing of pages for mobile view (maybe even desktop view?)
- [ ] Beautify the app/formatting
- [ ] Implement graph previews to show data at a specific time period
- [ ] Add drop-down for graph re-drawing based off duration (i.e., 24hr view, week view, etc...)
- [ ] Add config/build files for front end production code
- [ ] May need to revisit specific controls requirements with user

---------------------------------------------------------------------
### Back-end (BE)
---------------------------------------------------------------------
- [ ] Python application to collect data via RF from Arduinos/Sensors
  - [ ] Need list of all the HW to determine appropriate interface implementation
  - [ ] Collected data to be captured and stored in SQL-Lite time series DB
  - [ ] Ability to accept changes in data sampling or sensor settings via FE App
- [ ] Python Flask application to process requests from FE application
  - [ ] Query data requests and return to FE for display
  - [ ] Process any settings or data sampling rate changes to DB
- [ ] Apache setup and configuration
    - [ ] Routing for Python applications
    - [ ] Routing for static FE files
- DB Storage Rough Estimates
  - If the water outputs at once a minute, 100 Bytes per sensor
    - 60 min * 24 hrs * 100 Bytes = ~144KB per sensor
    - 100 sensors * 144KB = ~14.4MB for 100 Sensors/day
    - 14.4MB * 1,825 days (or 5 years) = ~26.28GB Max (just buy a 1TB HDD?)

---------------------------------------------------------------------
### Test/Mock data API etc.
---------------------------------------------------------------------
- [x] Build API to generate fake data for FE
- [x] Determine agreed upon parameters for fake data API to ensure seamless integration with real data when time comes
- [x] Package up the fake generated data into JSON for unpacking/processing on FE

---------------------------------------------------------------------
### Notes
---------------------------------------------------------------------
- A Beagle Bone is available for use to host the front/backend files
- Front end will communicate with BB using local LAN/WiFi
- Beagle bone is connected to small RF antenna inside house to Tx/Rx data from the Sensors
- Sensors are hooked up to an Arduino and Tx/Rx via RF capability outside
- Design product to be able to accept additional sensors/large quantities in future
