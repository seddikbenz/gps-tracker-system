import { observable, reaction, action, decorate } from "mobx";
import agent from "../agent";
import commonStore from "./commonStore";
import toastStore from "./toastStore";

class carStore {
  selectedId = 0;
  car = {
    id: 0,
    numberplate: "",
    code: "",
    gps_code: "",
    company_id: ""
  };
  cars = [
    {
      id: 1,
      numberplate: "0001-00-16",
      code: "",
      gps_code: "",
      company_id: "",
      positions: [
        {
          lat: 36.16,
          lng: 4.84
        }
      ]
    },
    {
      id: 2,
      numberplate: "0002-00-16",
      code: "",
      gps_code: "",
      company_id: "",
      positions: [
        {
          lat: 36.06,
          lng: 4.94
        }
      ]
    },
    {
      id: 3,
      numberplate: "0001-00-16",
      code: "",
      gps_code: "",
      company_id: "",
      positions: [
        {
          lat: 36.06,
          lng: 4.84
        }
      ]
    }
  ];
  loading = false;
  message = {
    type: "",
    body: "",
    show: false
  };
  hideMessage() {
    this.message = {
      type: "",
      body: "",
      show: false
    };
  }
  showMessage(message) {
    this.message = message;
  }
  getCar(id) {
    this.loading = true;
    return agent.Car.getCar(id)
      .then(response => {
        return response.data;
      })
      .then(
        action(data => {
          this.car = data.data;
        })
      )
      .catch(error => {
        let body =
          error.response !== undefined
            ? error.response.data.message
            : error.message;
        this.showMessage({
          type: "error",
          body: body,
          show: true
        });
      })
      .finally(
        action(() => {
          this.loading = false;
        })
      );
  }

  getCarLastPosition(id) {
    this.loading = true;
    return agent.Car.getCarLastPosition(id)
      .then(response => {
        return response.data;
      })
      .then(
        action(data => {
          this.car = data.data;
        })
      )
      .catch(error => {
        let body =
          error.response !== undefined
            ? error.response.data.message
            : error.message;
        this.showMessage({
          type: "error",
          body: body,
          show: true
        });
      })
      .finally(
        action(() => {
          this.loading = false;
        })
      );
  }

  getAll() {
    this.loading = true;
    return agent.Car.all()
      .then(response => {
        return response.data;
      })
      .then(
        action(data => {
          this.cars = data.data;
        })
      )
      .catch(error => {
        let body =
          error.response !== undefined
            ? error.response.data.message
            : error.message;
        this.showMessage({
          type: "error",
          body: body,
          show: true
        });
      })
      .finally(
        action(() => {
          this.loading = false;
        })
      );
  }
  create() {
    this.loading = true;
    return agent.Car.create(this.car)
      .then(response => {
        return response.data;
      })
      .then(
        action(data => {
          toastStore.success(data.message);
        })
      )
      .catch(error => {
        let body =
          error.response !== undefined
            ? error.response.data.message
            : error.message;
        toastStore.error(body);
      })
      .finally(
        action(() => {
          this.loading = false;
          //commonStore.history.push('/companies')
        })
      );
  }

  delete(id) {
    this.loading = true;
    return agent.Car.delete(id)
      .then(response => {
        return response.data;
      })
      .then(
        action(data => {
          toastStore.success(data.message);
        })
      )
      .catch(error => {
        let body =
          error.response !== undefined
            ? error.response.data.message
            : error.message;
        toastStore.error(body);
      })
      .finally(action(() => this.getAll()));
  }

  update() {
    this.loading = true;
    return agent.Car.update(this.car)
      .then(response => {
        return response.data;
      })
      .then(
        action(data => {
          toastStore.success(data.message);
        })
      )
      .catch(error => {
        let body =
          error.response !== undefined
            ? error.response.data.message
            : error.message;
        toastStore.error(body);
      })
      .finally(
        action(() => {
          this.loading = false;
          //commonStore.history.push('/companies')
        })
      );
  }
}

carStore = decorate(carStore, {
  selectedId: observable,
  car: observable,
  cars: observable,
  loading: observable,
  message: observable
});

export default new carStore();
