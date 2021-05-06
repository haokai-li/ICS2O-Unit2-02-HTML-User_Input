// Copyright (c) 2021 haokai All rights reserved
//
// Created by: haokai
// Created on: May 2021
// This is the Address_Input

function enterClicked() {
  // This function get address name and number and show it back

  //input
  const addressNumber = parseInt(document.getElementById("street-number").value)
  const addressName = document.getElementById("street-name").value

  //output
  document.getElementById('address').innerHTML = 'Your address is: ' + addressNumber + ' ' + addressName + '.'
}