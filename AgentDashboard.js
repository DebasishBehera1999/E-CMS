import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Modal, Button, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import styles from './Adashcss';

const AgentDashboard = ({navigation}) => {
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isViewOnly, setIsViewOnly] = useState(false);

  const [updatedName, setUpdatedName] = useState('');
  const [updatedSource, setUpdatedSource] = useState('');
  const [updatedDetails, setUpdatedDetails] = useState('');
  const [updatedVillage, setUpdatedVillage] = useState('');
  const [updatedMandal, setUpdatedMandal] = useState('');
  const [updatedDistrict, setUpdatedDistrict] = useState('');

  const getAPIData = async () => {
    const url = "http://192.168.1.143:3000/users";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  const deleteUser = async (id) => {
    const url = "http://192.168.1.143:3000/users";
    let result = await fetch(`${url}/${id}`, { method: "delete" });
    result = await result.json();
    if (result) {
      getAPIData();
    }
  };

  useEffect(() => {
    getAPIData();
  }, []);

  const [timeStamp, setTimeStamp] = useState('');
  useEffect(() => {
    const currentDateTime = new Date().toLocaleString();
    setTimeStamp(currentDateTime);
  }, []);

  const handleView = (item) => {
    setSelectedItem(item);
    setUpdatedName(item.name);
    setUpdatedSource(item.source);
    setUpdatedDetails(item.complaintDetails);
    setUpdatedVillage(item.village);
    setUpdatedMandal(item.mandal);
    setUpdatedDistrict(item.district);
    setIsViewOnly(true);
    setModalVisible(true);
  };

  const handleUpdate = (item) => {
    setSelectedItem(item);
    setUpdatedName(item.name);
    setUpdatedSource(item.source);
    setUpdatedDetails(item.complaintDetails);
    setUpdatedVillage(item.village);
    setUpdatedMandal(item.mandal);
    setUpdatedDistrict(item.district);
    setIsViewOnly(false);
    setModalVisible(true);
  };

  const handleSave = async () => {
    const updatedItem = {
      ...selectedItem,
      name: updatedName,
      source: updatedSource,
      complaintDetails: updatedDetails,
      village: updatedVillage,
      mandal: updatedMandal,
      district: updatedDistrict,
    };

    const url = `http://192.168.1.91:3000/users/${selectedItem.id}`;
    let result = await fetch(url, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    });

    result = await result.json();
    if (result) {
      setModalVisible(false);
      getAPIData();
    }
  };

  const tableHead = ['ComplaintID', 'Name', 'Status', 'Source', 'Details', 'Village', 'Mandal', 'District', 'Action', 'Time Stamp'];
  const widthArr = [200, 250, 200, 200, 200, 200, 200, 200, 350, 250];

  const renderAction = (item) => (
    <View style={styles.actionContainer}>
      <TouchableOpacity onPress={() => { navigation.navigate('Controller', { complaintData: item }); }}>
        <Text style={[styles.actionText, styles.assignText]}>ASSIGN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deleteUser(item.id)}>
        <Text style={[styles.actionText, styles.deleteText]}>DELETE</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleView(item)}>
        <Text style={[styles.actionText, styles.viewText]}>VIEW</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleUpdate(item)}>
        <Text style={[styles.actionText, styles.updateText]}>UPDATE</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Agent Dashboard</Text>

      <ScrollView horizontal={true}>
        <View>
          <Table borderStyle={styles.tableBorder}>
            <Row data={tableHead} widthArr={widthArr} style={styles.header} textStyle={styles.headerText} />
          </Table>
          <ScrollView style={styles.dataWrapper}>
            <Table borderStyle={styles.tableBorder}>
              {data.length ? (
                data.map((item, index) => (
                  <TableWrapper key={item.complaintId} style={styles.row}>
                    <Cell data={item.complaintId} width={widthArr[0]} textStyle={styles.text} />
                    <Cell data={item.name} width={widthArr[1]} textStyle={styles.text} />
                    <Cell data="PENDING" width={widthArr[2]} textStyle={styles.text} />
                    <Cell data={item.source} width={widthArr[3]} textStyle={styles.text} />
                    <Cell data={item.complaintDetails} width={widthArr[4]} textStyle={styles.text} />
                    <Cell data={item.village} width={widthArr[5]} textStyle={styles.text} />
                    <Cell data={item.mandal} width={widthArr[6]} textStyle={styles.text} />
                    <Cell data={item.district} width={widthArr[7]} textStyle={styles.text} />
                    <Cell data={renderAction(item)} width={widthArr[8]} textStyle={styles.text} />
                    <Cell data={item.timeStamp} width={widthArr[9]} textStyle={styles.text} />
                  </TableWrapper>
                ))
              ) : (
                <Text style={styles.noDataText}>No Data Available</Text>
              )}
            </Table>
          </ScrollView>
        </View>
      </ScrollView>

      {selectedItem && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Complaint ID: {selectedItem.complaintId}</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={updatedName}
              onChangeText={setUpdatedName}
              editable={!isViewOnly}
            />
            <TextInput
              style={styles.input}
              placeholder="Source"
              value={updatedSource}
              onChangeText={setUpdatedSource}
              editable={!isViewOnly}
            />
            <TextInput
              style={styles.input}
              placeholder="Complaint Details"
              value={updatedDetails}
              onChangeText={setUpdatedDetails}
              editable={!isViewOnly}
            />
            <TextInput
              style={styles.input}
              placeholder="Village"
              value={updatedVillage}
              onChangeText={setUpdatedVillage}
              editable={!isViewOnly}
            />
            <TextInput
              style={styles.input}
              placeholder="Mandal"
              value={updatedMandal}
              onChangeText={setUpdatedMandal}
              editable={!isViewOnly}
            />
            <TextInput
              style={styles.input}
              placeholder="District"
              value={updatedDistrict}
              onChangeText={setUpdatedDistrict}
              editable={!isViewOnly}
            />
            {!isViewOnly && <Button title="Save" onPress={handleSave} />}
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </Modal>
      )}
    </View>
  );
};

export default AgentDashboard;



