import React from "react";
import { Switch, Route } from "react-router-dom";
import AppCars from "./pages/AppCars";
import AddCar from "./pages/AddCar";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/cars">
          <AppCars />
        </Route>
        <Route path="/add">
          <AddCar />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
