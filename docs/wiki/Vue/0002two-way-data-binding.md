# Two-Way Data Binding

## What is two-way binding

Let's start learning about MVVM (Model-View-ViewModel) design patten.

- Model: a domain layer or data access layer
- View: user interface
- ViewModel: an abstraction of the view exposing public properties and commands.

A two-way binding is View's change can reflect on ViewModel, Model's change can reflect to view of ViewModel.

Thus, ViewModel is two-way binding, it binds the View on one way, and the Model on the other way.

So when data changes on one way, after ViewModel's automatic process the other way will change too. So developers don't have to operate on DOM directly.

## To achieve two-way binding

Vue2.0 use Object.defineProperties to do the data intercept and the notifier(bind data->view), use watcher to update view(bind view->data).

Vue3.0 use Proxy to do intercept.
