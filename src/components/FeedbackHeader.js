import React, { Component } from 'react';

export class FeedbackHeader extends Component {
  render() {
    return (
      <div>
        <div data-testid="header-profile-picture">
          Imagem do gravatar
        </div>
        <div data-testid="header-player-name">
          Nome do jogador
        </div>
        <div data-testid="header-score">
          Placar
        </div>
      </div>
    );
  }
}

export default FeedbackHeader;
