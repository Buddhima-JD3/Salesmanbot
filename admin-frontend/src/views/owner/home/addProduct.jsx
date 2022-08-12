
import React, { Component } from "react";
import axios from "axios";

export default class AddProduct extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            brand: "",
            healthStat: "",
            ingreduents: "",
            item_type:"",
            nutrition:""
        };
      }
    
      handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
          ...this.state,
          [name]: value,
        });
      };
    
      onSubmit = (e) => {
        e.preventDefault();
    
        const { brand, healthStat, ingreduents, item_type,nutrition } = this.state;
    
        const data = {
            brand:brand,
            healthStat: healthStat,
            ingreduents: ingreduents,
            item_type:item_type,
            nutrition:nutrition
        };
    
        console.log(data);
        axios.post("http://localhost:8080/addproduct", data).then((res) => {
          if (res.data.success) {
            this.setState({
                brand: "",
                healthStat: "",
                ingreduents: "",
                item_type:"",
                nutrition:""
            });
          }
        });
      };
      render() {
        return (
          <div className="col-md-8 mt-4 mx-auto">
            <br></br>
            <form>
              <div className="form-group h3 mb-3 font-weight-normal">
                <label for="topic">Brand</label>
                <input
                  type="text"
                  className="form-control"
                  id="brand"
                  name="brand"
                  placeholder="Brand"
                  value={this.state.brand}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group h3 mb-3 font-weight-normal">
                <label for="description">Health Stat</label>
                <input
                  type="text"
                  className="form-control"
                  id="healthStat"
                  name="healthStat"
                  placeholder="Health Stat"
                  value={this.state.healthStat}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group h3 mb-3 font-weight-normal">
                <label for="postCategory">Ingredients</label>
                <input
                  type="text"
                  className="form-control"
                  id="ingreduents"
                  name="ingreduents"
                  placeholder="Ingredients"
                  value={this.state.ingreduents}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group h3 mb-3 font-weight-normal">
                <label for="price">Item Type</label>
                <input
                  type="text"
                  className="form-control"
                  id="item_type"
                  name="item_type"
                  placeholder="Item Type"
                  value={this.state.item_type}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group h3 mb-3 font-weight-normal">
                <label for="price">Nutrition</label>
                <input
                  type="text"
                  className="form-control"
                  id="nutrition"
                  name="nutrition"
                  placeholder="Nutrition"
                  value={this.state.nutrition}
                  onChange={this.handleInputChange}
                />
              </div>
              <br></br>
              <div class="col-sm-10">
                <button
                  className="btn btn-success"
                  type="submit"
                  style={{ marginTop: "15px" }}
                  onClick={this.onSubmit}
                >
                  <i className="fas fa-save"></i>&nbsp;Save
                </button>
              </div>
            </form>
          </div>
        );
      }
};

