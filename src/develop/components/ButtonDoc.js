// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var Link = require('react-router').Link;
var jsxToString = require('jsx-to-string');
var DocsArticle = require('../../DocsArticle');

var Box = require('grommet/components/Box');
var Button = require('grommet/components/Button');
var Section = require('grommet/components/Section');
var Tiles = require('grommet/components/Tiles');
var Tile = require('grommet/components/Tile');

function convertButtonToString(buttonJSX) {
  return jsxToString(buttonJSX, {
    keyValueOverride: {
      onClick: 'this._onClick'
    }
  });
}

var ButtonDoc = React.createClass({

  contextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  _onClick: function () {
    // no-op
  },

  _renderButtonCode(heading, buttonJSX) {
    return (
      <div>
        <h3>{heading}</h3>
        <div className="example">
          {buttonJSX}
        </div>
        <pre><code className="html hljs xml">
          {convertButtonToString(buttonJSX)}
        </code></pre>
      </div>
    );
  },

  render: function() {
    var defaultButton = (
      <Button label="Action" onClick={this._onClick} />
    );

    var primaryButton = (
      <Button label="Action" primary={true} onClick={this._onClick} />
    );

    var secondaryButton = (
      <Button label="Action" secondary={true} onClick={this._onClick} />
    );

    var accentButton = (
      <Button label="Action" accent={true} onClick={this._onClick} />
    );

    var iconButton = (
      <Button icon="Close" onClick={this._onClick} />
    );

    var disabledButton = (
      <Button label="Action" />
    );

    var longButton = (
      <Button label="Action with a really long name that should be shortened"
        onClick={this._onClick} />
    );

    var hrefButton = (
      <Button href="/docs/" label="Home Page" />
    );

    var fillButtons = (
      <Tiles fill={true}>
        <Tile pad="small">
          <Button fill={true} onClick={this._onClick}
            label="One With Long Text" />
        </Tile>
        <Tile pad="small">
          <Button fill={true} onClick={this._onClick}
            label="Two" />
        </Tile>
        <Tile pad="small">
          <Button fill={true} onClick={this._onClick}
            label="Three" />
        </Tile>
        <Tile pad="small">
          <Button fill={true} onClick={this._onClick}
            label="Four" />
        </Tile>
      </Tiles>
    );

    var coloredButtons = (
      <Section colorIndex="neutral-1" pad="medium">
        <Box pad="small" direction="row">
          <Button label="Default" onClick={this._onClick} />
        </Box>
        <Box pad="small" direction="row">
          <Button label="Primary" primary={true} onClick={this._onClick} />
        </Box>
        <Box pad="small" direction="row">
          <Button label="Secondary" secondary={true} onClick={this._onClick} />
        </Box>
        <Box pad="small" direction="row">
          <Button label="Accent" accent={true} onClick={this._onClick} />
        </Box>
        <Box pad="small" direction="row">
          <Button label="Disabled" />
        </Box>
        <Box pad="small" direction="row">
          <Button icon="Close" onClick={this._onClick} />
        </Box>
      </Section>
    );

    return (
      <DocsArticle title="Button" colorIndex="neutral-3">

        <p>A button. We have a separate component from the
        browser base so we can style it.</p>
        <pre><code className="html hljs xml">
          {`<Button label="Item 1">`}
        </code></pre>

        <section>
          <h2>Options</h2>
          <dl>
          <dt><code>accent         true|false</code></dt>
          <dd>Whether this is an accent button.</dd>
          <dt><code>fill           true|false</code></dt>
          <dd>Whether the button expands to fill all of the available
            width and height.
          </dd>
          <dt><code>href           {"{text}"}</code></dt>
          <dd>If specified, the button will behave like an anchor tag.</dd>
          <dt><code>icon           {"{name}"}</code></dt>
          <dd>Name of an icon to place in the button.
            See <Link to={this.context.routePrefix + "icon"}>Icon</Link>.</dd>
          <dt><code>label          {"{text|node}"}</code></dt>
          <dd>Label text to place in the button.</dd>
          <dt><code>onClick        {"{func}"}</code></dt>
          <dd>Click handler. Not providing an onClick function causes the
            control to be disabled.</dd>
          <dt><code>plain          true|false</code></dt>
          <dd>Whether this is a plain button with no border or padding. Use
            this when wrapping children that provide the complete visualization
            of the control.</dd>
          <dt><code>primary        true|false</code></dt>
          <dd>Whether this is a primary button. There should be at most
            one per page or screen.</dd>
          <dt><code>secondary      true|false</code></dt>
          <dd>Whether this is a secondary button.</dd>
          <dt><code>type           button|reset|submit</code></dt>
          <dd>The type of button. Set the type to <code>submit</code> for the
            default button on forms. Defaults to <code>button</code>. Previously,
            a type of <code>icon</code> was supported. This type has been
            deprecated in favor of <code>{"plain={true}"}</code></dd>
          </dl>
        </section>

        <section>
          <h2>Example</h2>
          {this._renderButtonCode('Default', defaultButton)}
          {this._renderButtonCode('Primary', primaryButton)}
          {this._renderButtonCode('Secondary', secondaryButton)}
          {this._renderButtonCode('Accent', accentButton)}
          {this._renderButtonCode('Icon', iconButton)}
          {this._renderButtonCode('Disabled', disabledButton)}
          {this._renderButtonCode('Long', longButton)}
          {this._renderButtonCode('Fill', fillButtons)}
          {this._renderButtonCode('Colored context', coloredButtons)}
          {this._renderButtonCode('Href', hrefButton)}
        </section>

      </DocsArticle>
    );
  }
});

module.exports = ButtonDoc;
