(function ($, Editor, undefined) {
	'use strict';
	if (typeof Editor === undefined) {
		throw new Error('Editor must be loaded beforehand this plugin');
	}

	$.fn.editorify = function (options) {
		options = options || {};
		return this.each(function (index, element) {
			var textAreaHeight = $(element).height() + 35;
			var editor;
			options.element = element;
			editor = new Editor(options);
			$(element).data('editor', editor);
			editor.render();
			editor.codemirror.setSize(null, textAreaHeight);
		});
	};
}(this.jQuery, this.Editor));

(function ($, undefined) {
	'use strict';
	$(function () {
		$('textarea.markdown, textarea.markdown_extra, textarea.markdown_extra_with_smartypants, textarea.markdown_with_purifier').editorify({
			toolbar: [
				{name: 'undo', action: Editor.undo},
				{name: 'redo', action: Editor.redo},
				'|',
				{name: 'bold', action: Editor.toggleBold},
				{name: 'italic', action: Editor.toggleItalic},
				'|',
				{name: 'quote', action: Editor.toggleBlockquote},
				{name: 'unordered-list', action: Editor.toggleUnOrderedList},
				{name: 'ordered-list', action: Editor.toggleOrderedList},
				'|',
				{name: 'link', action: Editor.drawLink},
				{name: 'image', action: Editor.drawImage},
			]
		});
	});
}(this.jQuery));
