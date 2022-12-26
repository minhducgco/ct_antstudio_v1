/******************************************
 *  Author      : HoiHD
 *  Created On  : Fri Aug 28 2020
 *  File        : TableAutoRender.js
 *  Description : Tự động tạo table với dữ liệu cho sẵn
 *******************************************/
import React, {useEffect, useState, Fragment} from 'react';
import {Text, StyleSheet} from 'react-native';
import {DataTable} from 'react-native-paper';
import PropTypes from 'prop-types';

import theme from '@styles/theme.style';

export default function TableAutoRender({
  showPagination,
  itemsPerPage,
  headers,
  data,
  headerStyles,
  headerTextStyles,
  textStyles,
}) {
  const [page, setPage] = useState(0);
  const from = page * itemsPerPage;
  const to =
    (page + 1) * itemsPerPage >= data.length
      ? data.length
      : (page + 1) * itemsPerPage;
  const [currentData, setCurrentData] = useState([...data]);
  const [currentHeaders, setCurrentHeaders] = useState([...headers]);

  useEffect(() => {
    setCurrentData(
      data.slice(itemsPerPage * page, itemsPerPage + page * itemsPerPage),
    );
  }, [
    page,
    itemsPerPage,
    showPagination,
    headers,
    data,
    headerStyles,
    headerTextStyles,
    textStyles,
  ]);

  return (
    <DataTable>
      <DataTable.Header style={[styles.header, {...headerStyles}]}>
        {currentHeaders.map(header => {
          return (
            <DataTable.Title>
              <Text style={[styles.title, {...headerTextStyles}]}>
                {header}
              </Text>
            </DataTable.Title>
          );
        })}
      </DataTable.Header>
      {currentData.map((dt, index) => {
        return (
          <DataTable.Row>
            {Object.keys(dt).map(k => {
              return (
                <DataTable.Cell>
                  <Text style={[styles.text, {...textStyles}]}>{dt[k]}</Text>
                </DataTable.Cell>
              );
            })}
          </DataTable.Row>
        );
      })}
      {showPagination && (
        <DataTable.Pagination
          page={page}
          numberOfPages={Math.floor(data.length / itemsPerPage + 1)}
          onPageChange={page => setPage(page)}
          label={`${from + 1} - ${to} / ${data.length}`}
        />
      )}
    </DataTable>
  );
}

TableAutoRender.defaultProps = {
  headerStyles: {},
  headerTextStyles: {},
  textStyles: {},
  showPagination: true,
  itemsPerPage: 3,
  data: [],
  headers: [],
  showOrder: true,
};

TableAutoRender.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  headerStyles: PropTypes.object,
  headerTextStyles: PropTypes.object,
  textStyles: PropTypes.object,
  itemsPerPage: PropTypes.number.isRequired,
  showPagination: PropTypes.bool,
};

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.FONT_FAMILY,
    fontSize: 14,
    color: '#000',
  },
  header: {
    backgroundColor: '#c9c9c9',
  },
  title: {
    fontFamily: theme.FONT_BOLD,
    color: '#000',
    fontSize: 14,
  },
});
