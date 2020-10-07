import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export function PublicFooter() {
  return (
    <div className="ml20 mr20" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <div>
        <Button size="small" component={Link} to="#">
          Terms Condition
        </Button>
        <Button size="small" component={Link} to="#">
          Privacy Policy
        </Button>
        <Button size="small" component={Link} to="#">
          Help
        </Button>
      </div>
      <div>&copy; 2020 onka-react-admin. All Rights Reserved.</div>
    </div>
  );
}
