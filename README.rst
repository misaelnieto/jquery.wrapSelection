About the jquery.wrapSelection plugin
=====================================

The jquery.wrapSelection plugin's original page is
`http://plugins.jquery.com/project/wrapSelection`_. But it has been
sitting there without updates since 2008. The demo page has went
missing. I just uploaded this repo to mantain a demo page.

Original documentation
======================

Overview
--------

``wrapSelection`` wraps highlighted text with valid XHTML span tags.
Returns a jQuery object for chaining additional commands.

It was originally designed to allow end users to select text
(highlight text with their mouse) and change the background
style. Unlike other solutions that apply to the whole element, this
creates XHTML compliant span tags around the selection area.

Features:

  - Cross Browser Selections (tested in IE, Firefox, Opera, Safari).

  - Create function getRangeAt() to return custom range object

  - Create a custom class to identify selections

  - Ability to restrict selectable area to a tag (single element)

  - jQuery plugin with limited chaining ability

  - Must create XHTML compliant code

  - Snaps to begining and end or word if selected in the middle of the word


Documentation for wrapSelection()
---------------------------------

Example Breakdown of Plugin
^^^^^^^^^^^^^^^^^^^^^^^^^^^

The following is a basic html p tag and "|" marks the start and the
end of the selection::

  <p>
    A
    <b>sm|all</b>
    examp|le.
  </p>

Use the following jQuery::

  $(document).ready(function(){
    $('p').bind("mouseup", function(){
      $().wrapSelection().addClass('h1');
    });
  });

The following is the HTML results::

  <p>
    A
    <b>sm
      <span class='sel_123445454 h1'>all</span>
    </b>
    <span class='sel_123445454 h1'> examp</span>
    le.
  </p>

The function will return a jquery object with span tags for class "sel_123445454".

How to Use wrapSelection
^^^^^^^^^^^^^^^^^^^^^^^^

.. Note:: This assumes that the CSS class "h1" is already defined.

1. Include the jQuery and wrapSelection to the page.::

  <script type="text/javascript" src="jquery.js"> </script>
  <script type="text/javascript" src="jquery.wrapSelection.js"> </script>

2. Bind wrapSelection to a mouseup event like the following::

  $(document).ready(function(){
    $('#container').bind("mouseup", function(){
      $().wrapSelection().addClass('h1');
    });
  });

Restricting Selection to an Element
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Change the above code to include a selector. Only include one element,
additional elements will fail miserably; So, don't use more than one!::

  $('#selectable').wrapSelection().addClass('h1');

wrapSelection Options Parameters
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

There are two optional parameters to wrapSelection, Snap to Word
(fitToWord) and Range Object(wrapRange).

Add options using the following syntax.::

  $().wrapSelection({
    fitToWord: false,
    wrapRange: rangeObj
  });


Turning off Snap to word
^^^^^^^^^^^^^^^^^^^^^^^^

``fitToWord`` is a boolean indicating if it is on or off. ``True`` (the
default) forces the selection to the whole word. ``False`` turns off the
snap to word functionality.

Range Object
^^^^^^^^^^^^

Some cases, you need to store the range object prior to adding a
wrapSelection. See ``$().getRangeAt()`` function for more information
on how to get the range object for wrapSelection to use. One case for
this is a floating toolbar that appears after the selection.

By default, ``wrapRange`` is false and calls ``getRangeAt()`` by
default. If a range object is passed, it will use that object to
create the wrapSelection.

Note when Chaining, selectors do not chain nicely with
wrapSelection. For example::

  $('#container').bind("mouseup", function(){
    $('h3').addClass('header3').wrapSelection().addClass('h1');
  });

  - Binded to the element with an id of container

  - Selector on all ``h3`` 's adding a class of ``header3``

  - ``wrapSelection()`` creates xhtml span tags with the class h1 around
    the selection triggered in the element "container"

The commands to the left of ``wrapSelector`` is applied to elements
found by the ``h3`` selector. All commands to the right of wrapSelector is
applied to the span tags that were created.  

getRangeAt()
____________

Returns a custom range object, that wrapSelection can use. It is
called in the same manner as wrapSelection, with an element container
``$('#container').getRangeAt()`` or the entire document
``$().getRangeAt()``::

  $(document).ready(function(){
    $('#container').bind("mouseup", function(){
    var myRange = $().getRangeAt();
    });
  });

Another function can call wrapSelection like this::

  $().wrapSelection({wrapRange : myRange});

