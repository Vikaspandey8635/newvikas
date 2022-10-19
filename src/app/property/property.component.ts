import { Component, OnInit } from '@angular/core';
import data from '../../assets/properties.json';
@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {
  jsonData: { id: number; name: string; for_sale: number; for_rent: number; for_hold: number; locality_id: number; city_id: number; configuration_id: number; property_type_id: number; expected_price_sale: any; expected_price_rent: any; image: string; image_thumb: any; area: any; floor: number; possesion_date: any; bedroom: number; bathroom: number; description: string; quantity: number; created_by: number; buyer_id: any; status: number; step: number; building_id: number; building_towers_id: number; floor_num: number; currency_id: number; parking: number; parking_count: number; parking_for_sale: number; furnished: number; pets: number; floor_plan: string; min_price: number; max_price: number; avg_price: any; external_broker_id: any; is_blocked: number; property_url: string; is_featured: number; half_bathroom: number; kids_friendly: number; students_friendly: number; lgtb_friendly: number; mature_people_friendly: number; is_seller_linked: any; is_property_sold: number; property_price: number; reason: any; view_counter: number; building_configuration_id: number; broker_commision: string; total_commission: number; created_at: string; updated_at: string; lead_properties_count: number; max_area: string; is_favorite: number; building: { id: number; name: string; starting_price: number; banks: any[]; is_favorite: number; }; building_configuration: { id: number; building_id: number; name: string; configuration_id: number; floor_map_image: string; carpet_area: any; base_price: any; created_by: any; created_at: string; updated_at: string; config: { id: number; name_en: string; name_es: string; bedroom: number; bathroom: number; half_bathroom: number; created_by: number; status: number; created_at: string; updated_at: string; name: string; is_selected: number; }; }; configuration: { id: number; name_en: string; name_es: string; bedroom: number; bathroom: number; half_bathroom: number; created_by: number; status: number; created_at: string; updated_at: string; name: string; is_selected: number; }; property_type: { id: number; name_en: string; name_es: string; created_by: number; status: number; created_at: string; updated_at: string; name: string; }; creator: { id: number; name: string; image: string; }; building_towers: { id: number; building_id: number; tower_name: string; num_of_floors: number; possession_status_id: number; launch_date: string; num_of_properties: number; deleted_at: any; updated_at: string; created_at: string; unique_floors: number[]; }; carpet_areas: { id: number; property_id: number; area: string; price: number; created_at: string; updated_at: string; }[]; }[];
  searchText;
  constructor() {

    console.log(data, 'json data');
    this.jsonData = data.data;
    console.log(this.jsonData, 'fetched data');

  }

  ngOnInit(): void {
  }
// Sort(){
//   this.jsonData.sort((a, b) => (a.name > b.name) ? 1 : -1)
//   console.log(this.jsonData,'increasing data');
// }
Sort(){
  console.log('sorting works');
  this.jsonData.sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
})
}
SortbyProperty(){

  this.jsonData.sort(function(a, b){
    if(a.building.name < b.building.name) { return -1; }
    if(a.building.name > b.building.name) { return 1; }
    return 0;
})
}
SortbyTowersName(){

  this.jsonData.sort(function(a, b){
    if(a.building_towers.tower_name < b.building_towers.tower_name) { return -1; }
    if(a.building_towers.tower_name> b.building_towers.tower_name) { return 1; }
    return 0;
})
}
SortbyPropertyTypeName(){

  this.jsonData.sort(function(a, b){
    if(a.property_type.name < b.property_type.name) { return -1; }
    if(a.property_type.name> b.property_type.name) { return 1; }
    return 0;
})
}
}
