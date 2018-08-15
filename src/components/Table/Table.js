import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import { TablePagination, TableSortLabel } from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import * as movieService from "../../services/fakeMovieService";
import Filter from '../Filter/Filter';


function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => b[orderBy] > a[orderBy]
    : (a, b) => a[orderBy] > b[orderBy];
}

const columns= [
  { id: "title", numeric: false, label: "Title" },
  { id: "genre", numeric: false, label: "Genre" },
  { id: "numberInStock", numeric: true, label: "Stock" },
  { id: "dailyRentalRate", numeric: true, label: "Rate" },
];

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
    // background:'rgba(0,0,0,.3)',
  },
  table: {
    minWidth: 700,
    // background:'rgba(255,255,255,.0)',
  },
  tableWrapper: {
    overflowX: "auto"
  }
});

const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
    body: {
      fontSize: 24,
    },
  }))(TableCell);

class EnhancedTable extends Component {
  state = {
    data: movieService.getMovies(),
    page: 0,
    rowsPerPage: 5,
    filter:false,
    filterBy:'',
    order: "desc",
    orderBy: "dailyRentalRate",
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleFilterRequest = (event) => {
    if(event.target.value === '')
      this.setState({filter:false, filterBy:''})
    else{
      this.setState({filter:true, filterBy:event.target.value})
    }
  }

  handleSortRequest = (property) => {
    const orderBy = property;
    let order = "desc";

    if (this.state.orderBy === property && this.state.order === "desc") {
      order = "asc";
    }

    this.setState({ order, orderBy });
  };

  render() {
    const { classes } = this.props;
    const { data, rowsPerPage, page, filter, filterBy, order, orderBy } = this.state;
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <React.Fragment>
        <Filter handleChange={this.handleFilterRequest}/>
        <Paper className={classes.root} >
          <div className={classes.tableWrapper}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  {
                    columns.map(col=>{
                      return<CustomTableCell key={col.id} numeric={col.numeric}>
                              <TableSortLabel
                                active={orderBy === col.id}
                                direction={order}
                                onClick={()=>this.handleSortRequest(col.id)}
                              >
                                {col.label}
                              </TableSortLabel>
                            </CustomTableCell>
                    })
                  }
                  
                </TableRow>
              </TableHead>
              <TableBody>
                {data
                  .sort(getSorting(order, orderBy))
                  .filter(m=> filter ? m.genre.name === filterBy : true)
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(movie => {
                    return (
                      <TableRow key={movie._id}>
                        <TableCell component="th" scope="row">
                          {movie.title}
                        </TableCell>
                        <TableCell>{movie.genre.name}</TableCell>
                        <TableCell numeric>{movie.numberInStock}</TableCell>
                        <TableCell numeric>{movie.dailyRentalRate}</TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 48 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <TablePagination
            component="div"
            count={data.filter(m=> filter ? m.genre.name === filterBy : true).length}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[]}
            page={page}
            backIconButtonProps={{
              "aria-label": "Previous Page"
            }}
            nextIconButtonProps={{
              "aria-label": "Next Page"
            }}
            onChangePage={this.handleChangePage}
          />
        </Paper>
      </React.Fragment>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EnhancedTable);
