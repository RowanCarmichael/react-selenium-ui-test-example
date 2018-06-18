import React from 'react';
import Dialog from 'react-toolbox/lib/dialog';
import Input from 'react-toolbox/lib/input';
import { Button } from 'react-toolbox/lib/button';
import styles from './App.css';
import API from './Api';
import LoadingBar from './components/loadingBar/LoadingBar';
import Map from './components/map/Map';

class App extends React.Component {
  state = {
    loadedMap: false,
    points: [],
    dialogActive: false,
    loadedDetails: false,
    details: null,
  }

  componentDidMount() {
    this.loadMapData();
  }

  loadMapData = () => {
    this.setState({ loadedMap: false, points: [] });
    API.getMapData().then((payload) => {
      this.setState({ loadedMap: true, points: payload });
    });
  }

  handleDialogToggle = () => {
    this.setState(prevState => ({ dialogActive: !prevState.dialogActive }));
  }

  handleMarkerClick = (id) => {
    this.setState({ dialogActive: true, loadedDetails: false, details: null });

    API.getDetails(id).then((payload) => {
      this.setState({ loadedDetails: true, details: payload });
    });
  }

  handleDeleteMarker = () => {
    this.setState({ loadedDetails: false, details: null });
    API.deleteDetails(this.state.details.id).then(() => {
      this.setState({ dialogActive: false });
      this.loadMapData();
    });
  }

  handleReactivateClick = () => {
    this.setState({ loadedMap: false, points: [] });
    API.reactivateMapData().then(() => {
      this.loadMapData();
    });
  }

  render() {
    return (
      <div className={styles.app}>
        {this.state.loadedMap ?
          <div>
            <Button
              className={styles.reactivateButton}
              id="reactivateButton"
              label="Reactivate All"
              onClick={this.handleReactivateClick}
              accent
              raised
            />
            <Dialog
              active={this.state.dialogActive}
              onEscKeyDown={this.handleDialogToggle}
              onOverlayClick={this.handleDialogToggle}
              className={styles.dialog}
              title="View Details"
              actions={[
                {
                  label: 'Cancel',
                  id: 'detailsCancelButton',
                  primary: true,
                  raised: true,
                  onClick: this.handleDialogToggle,
                },
                {
                  label: 'Deactivate',
                  id: 'detailsDeactivateButton',
                  accent: true,
                  raised: true,
                  onClick: this.handleDeleteMarker,
                  disabled: !this.state.loadedDetails,
                },
              ]}
            >
              {this.state.loadedDetails ?
                <div>
                  <p id="detailsName">Name: {this.state.details.name}</p>
                  <p id="detailsLocation">Last known location: {this.state.details.location}</p>
                  <p id="detailsVehicle">Vehicle: {this.state.details.vehicle}</p>
                  <p id="detailsOdometer">Odometer: {this.state.details.odometer}km</p>
                  <Input id="detailsInput" label="Deactivation Reason" />
                </div>
                :
                <LoadingBar id="detailsLoadingBar" label="Loading Details..." />
              }
            </Dialog>
          </div>
          :
          <div id="mapLoadingBar" className={styles.mapLoadingContainer}>
            <LoadingBar label="Loading Map..." />
          </div>
        }
        <Map points={this.state.points} onMarkerClick={this.handleMarkerClick} />
      </div>
    );
  }
}

export default App;
